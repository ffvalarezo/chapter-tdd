import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.*;

class TransferServiceTest {
  AccountRepo repo; TransferService svc;

  @BeforeEach void setup() {
    repo = new InMemoryAccountRepo();
    repo.save(Account.active("A1",500));
    repo.save(Account.active("A2",100));
    svc = new TransferService(repo);
  }

  @Test void rechaza_monto_no_positivo(){
    var r = svc.transfer("A1","A2",0);
    assertEquals("RECHAZADO", r.status()); assertEquals("Monto inválido", r.message());
  }
  @Test void rechaza_fondos_insuficientes(){
    var r = svc.transfer("A1","A2",600);
    assertEquals("RECHAZADO", r.status());
  }
  @Test void transfiere_y_actualiza_saldos(){
    var r = svc.transfer("A1","A2",200);
    assertEquals("OK", r.status());
    assertEquals(300, repo.find("A1").balance());
    assertEquals(300, repo.find("A2").balance());
  }
}