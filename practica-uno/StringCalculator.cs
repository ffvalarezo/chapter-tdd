public class StringCalculator {
  public int Add(string input) {
    if (string.IsNullOrWhiteSpace(input)) return 0;
    var sum = 0;
    foreach (var s in input.Split(',')) sum += int.Parse(s.Trim());
    return sum;
  }
}