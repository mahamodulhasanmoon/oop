// incaptulations

class Person{
    private String name;
    public static int key;

    public Person(String name){
        this.name = name;
    }
    public String getName(){
        return this.name;
    }
    public static Person create(String name){
        return new Person(name);
    }

}