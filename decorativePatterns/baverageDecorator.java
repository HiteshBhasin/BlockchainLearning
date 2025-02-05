
// this is where condiments are to add dynamically. 
public abstract class baverageDecorator extends baverage {
    baverage baverage;

    public abstract String getDiscription();

    public size getSize() {
       return  baverage.getS();
    }

    public void setSize(size s){
        baverage.setS(s);
    }
}
