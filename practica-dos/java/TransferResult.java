public record TransferResult(String status, String message) {
  public static TransferResult ok(){ return new TransferResult("OK",""); }
  public static TransferResult reject(String msg){ return new TransferResult("RECHAZADO", msg); }
}