{
    // Problem 4: 
    // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type

    type Circle = {
        shape: "circle";
        radius: number;
    };

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    };

    type Shape = Circle | Rectangle;

    const calculateShapeArea = (shape: Shape): number => {
        if(shape.shape === "circle"){
            return Math.PI * shape.radius ** 2;
        }
        return shape.width * shape.height;
    };

    // Sample Input 1:
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);

    // sample output 2:
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6
    });
    console.log(rectangleArea);













}