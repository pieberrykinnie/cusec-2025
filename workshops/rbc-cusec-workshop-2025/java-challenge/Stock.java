public class Stock {
    private String name;
    private String company;
    private double open;
    private double high;
    private double low;
    private double close;

    public Stock(String name, String company, double open, double high, double low, double close) {
        this.name = name;
        this.company = company;
        this.open = open;
        this.high = high;
        this.low = low;
        this.close = close;
    }

    // Getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public double getOpen() {
        return open;
    }

    public void setOpen(double open) {
        this.open = open;
    }

    public double getHigh() {
        return high;
    }

    public void setHigh(double high) {
        this.high = high;
    }

    public double getLow() {
        return low;
    }

    public void setLow(double low) {
        this.low = low;
    }

    public double getClose() {
        return close;
    }

    public void setClose(double close) {
        this.close = close;
    }
}