public abstract class baverage {

   
    public enum size{TALL, GRANDE , VENTI};
   size s = size.TALL;
   String discription = " ";
    public String discription(){
        return discription;
    }
    
    public size getS() {
        return s;
    }

    public void setS(size s) {
        this.s = s;
    }
    public abstract double  cost();
}
