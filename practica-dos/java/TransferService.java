public class TransferService {
  private final AccountRepo repo;
  public TransferService(AccountRepo repo){ this.repo = repo; }

  public TransferResult transfer(String fromId, String toId, int amount){
    if (amount <= 0) return TransferResult.reject("Monto inválido");
    if (fromId.equals(toId)) return TransferResult.reject("Cuentas iguales");
    var from = repo.find(fromId); var to = repo.find(toId);
    if (from == null || to == null) return TransferResult.reject("Cuenta inexistente");
    if (!from.active() || !to.active()) return TransferResult.reject("Cuenta inactiva");
    if (from.balance() < amount) return TransferResult.reject("Fondos insuficientes");
    repo.save(from.debit(amount));
    repo.save(to.credit(amount));
    return TransferResult.ok();
  }
}