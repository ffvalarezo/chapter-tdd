public class StringCalculator {
  public int add(String input) {
    if (input == null || input.trim().isEmpty()) return 0;
    String[] parts = input.split(",");
    int sum = 0;
    for (String p : parts) sum += Integer.parseInt(p.trim());
    return sum;
  }
}