import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Stock> stocks = readStocksFromCSV("stock_data.csv");
        System.out.println("Number of stocks in list: " + stocks.size());
        printTopAndWorstPerformingStocks(stocks);
    }

    public static List<Stock> readStocksFromCSV(String fileName) {
        List<Stock> stocks = new ArrayList<>();
        String line;
        try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
            br.readLine(); // Skip header line
            while ((line = br.readLine()) != null) {
                String[] values = parseCSVLine(line);
                Stock stock = new Stock(
                    values[0],
                    values[1],
                    Double.parseDouble(values[2]),
                    Double.parseDouble(values[3]),
                    Double.parseDouble(values[4]),
                    Double.parseDouble(values[5])
                );
                stocks.add(stock);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return stocks;
    }

    private static String[] parseCSVLine(String line) {
        List<String> values = new ArrayList<>();
        StringBuilder sb = new StringBuilder();
        boolean inQuotes = false;
        for (char c : line.toCharArray()) {
            if (c == '"') {
                inQuotes = !inQuotes;
            } else if (c == ',' && !inQuotes) {
                values.add(sb.toString());
                sb.setLength(0);
            } else {
                sb.append(c);
            }
        }
        values.add(sb.toString());
        return values.toArray(new String[0]);
    }

    public static double calculatePerformance(Stock stock) {
        return ((stock.getClose() - stock.getOpen()) / stock.getOpen()) * 100;
    }

    public static void printTopAndWorstPerformingStocks(List<Stock> stocks) {
        List<StockPerformance> stockPerformances = stocks.stream()
            .map(stock -> new StockPerformance(stock.getName(), calculatePerformance(stock)))
            .sorted(Comparator.comparingDouble(StockPerformance::getPerformance).reversed())
            .collect(Collectors.toList());

        System.out.println("Top 5 Performing Stocks:");
        for (int i = 0; i < 5; i++) {
            StockPerformance sp = stockPerformances.get(i);
            System.out.printf("%d.\tName: %s\t\tPerformance: %.2f%%\n", i + 1, sp.getName(), sp.getPerformance());
        }

        System.out.println("\nWorst 5 Performing Stocks:");
        for (int i = stockPerformances.size() - 1; i > stockPerformances.size() - 6; i--) {
            StockPerformance sp = stockPerformances.get(i);
            System.out.printf("%d.\tName: %s\t\tPerformance: %.2f%%\n", stockPerformances.size() - i, sp.getName(), sp.getPerformance());
        }
    }
}

class StockPerformance {
    private String name;
    private double performance;

    public StockPerformance(String name, double performance) {
        this.name = name;
        this.performance = performance;
    }

    public String getName() {
        return name;
    }

    public double getPerformance() {
        return performance;
    }
}