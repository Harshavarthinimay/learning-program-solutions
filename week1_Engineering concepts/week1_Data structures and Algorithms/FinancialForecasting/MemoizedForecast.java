package com.forecast;

import java.util.HashMap;
import java.util.Map;

public class MemoizedForecast {

    public static double memoizedFutureValue(double pv, double rate, int years, Map<Integer, Double> memo) {
        if (years == 0) return pv;
        if (memo.containsKey(years)) return memo.get(years);

        double value = memoizedFutureValue(pv, rate, years - 1, memo) * (1 + rate);
        memo.put(years, value);
        return value;
    }

    public static void main(String[] args) {
        double pv = 10000;
        double rate = 0.05;
        int years = 5;

        Map<Integer, Double> memo = new HashMap<>();
        double result = memoizedFutureValue(pv, rate, years, memo);

        System.out.printf("Memoized FV after %d years: %.2f ruppee\n", years, result);
    }
}
