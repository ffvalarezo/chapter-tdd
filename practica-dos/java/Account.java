public record Account(String id, int balance, boolean active) {
  public static Account active(String id, int balance){ return new Account(id,balance,true); }
  public Account debit(int amount){ return new Account(id, balance-amount, active); }
  public Account credit(int amount){ return new Account(id, balance+amount, active); }
}