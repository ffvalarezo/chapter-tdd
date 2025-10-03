class StringCalculatorTest {
  @Test void empty_returns_zero() {
    assertEquals(0, new StringCalculator().add(""));
  }
  @Test void single_number() {
    assertEquals(1, new StringCalculator().add("1"));
  }
  @Test void two_numbers() {
    assertEquals(3, new StringCalculator().add("1,2"));
  }
}