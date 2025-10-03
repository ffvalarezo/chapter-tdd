using Xunit;

public class StringCalculatorTests {
  [Fact] public void Empty_ReturnsZero() =>
    Assert.Equal(0, new StringCalculator().Add(""));
  [Fact] public void Single() =>
    Assert.Equal(1, new StringCalculator().Add("1"));
  [Fact] public void Two() =>
    Assert.Equal(3, new StringCalculator().Add("1,2"));
}