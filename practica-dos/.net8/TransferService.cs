public record Account(string Id, int Balance, bool Active){
  public Account Debit(int amount) => this with { Balance = Balance - amount };
  public Account Credit(int amount) => this with { Balance = Balance + amount };
}
public record TransferResult(string Status, string Message){
  public static TransferResult Ok() => new("OK", "");
  public static TransferResult Reject(string m) => new("RECHAZADO", m);
}
public class TransferService {
  private readonly Dictionary<string,Account> db = new();
  public void Save(Account a)=> db[a.Id]=a;
  public Account? Find(string id)=> db.TryGetValue(id, out var a) ? a : null;

  public TransferResult Transfer(string from, string to, int amount){
    if (amount<=0) return TransferResult.Reject("Monto inválido");
    if (from==to) return TransferResult.Reject("Cuentas iguales");
    var o = Find(from); var d = Find(to);
    if (o is null || d is null) return TransferResult.Reject("Cuenta inexistente");
    if (!o.Active || !d.Active) return TransferResult.Reject("Cuenta inactiva");
    if (o.Balance < amount) return TransferResult.Reject("Fondos insuficientes");
    Save(o.Debit(amount)); Save(d.Credit(amount));
    return TransferResult.Ok();
  }
}