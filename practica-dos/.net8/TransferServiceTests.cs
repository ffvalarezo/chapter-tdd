using Xunit; using Transfer;
public class TransferServiceTests {
  private readonly TransferService svc = new();
  public TransferServiceTests(){ svc.Save(new("A1",500,true)); svc.Save(new("A2",100,true)); }

  [Fact] public void Rejects_NonPositive() {
    var r = svc.Transfer("A1","A2",0);
    Assert.Equal("RECHAZADO", r.Status);
  }
  [Fact] public void Ok_UpdatesBalances() {
    var r = svc.Transfer("A1","A2",200);
    Assert.Equal("OK", r.Status);
    Assert.Equal(300, svc.Find("A1")!.Balance);
    Assert.Equal(300, svc.Find("A2")!.Balance);
  }
}