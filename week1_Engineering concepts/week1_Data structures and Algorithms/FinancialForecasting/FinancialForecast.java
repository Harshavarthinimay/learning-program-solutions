package com.forecast;

public class FinancialForecast {

    public static double futureValue(double presentValue, double rate, int years) {
        if (years == 0) return presentValue;
        return futureValue(presentValue * (1 + rate), rate, years - 1);
    }

    public static double optimizedFutureValue(double presentValue, double rate, int years) {
        return presentValue * Math.pow(1 + rate, years);
    }

    public static void main(String[] args) {
        double pv = 10000;
        double rate = 0.05;
        int years = 5;

        double result = futureValue(pv, rate, years);
        double optResult = optimizedFutureValue(pv, rate, years);

        System.out.printf("Recursive FV: %.2f ruppee\n", result);
        System.out.printf("Optimized FV: %.2f ruppee\n", optResult);
    }
}
