
public class mocha extends baverageDecorator {

    public mocha(baverage bav){
        this.baverage = bav;
    }
    @Override
    public String getDiscription() {
        return baverage.discription() + "mocha";
    }

    @Override
    public double cost() {
       return baverage.cost()+.50;
    }
    
    
}
