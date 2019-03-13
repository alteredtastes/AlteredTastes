public enum MyEnumm {
    PROTOCOL((String)"http"),
    ROOT((String)"sandy.atr.local");


    private MyEnumm(String val) {
        this.val = val;
    }

    private String val;
    public String getVal() {
        return this.val;
    }
}
