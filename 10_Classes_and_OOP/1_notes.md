# JavaScript & classes

## OOP
-  In JavaScript is a paradigm(in smiple structure or style) that allows you to structure your code using objects, which can contain both data and functions. 

## Object
- It is a collection of properties and methods.
- Some e.g., of object in JS, like -> toLowerCase, String, Promise, Math, & Date etc.

## Why use OOP
- There is concept of "Spaghetti code" refers to a codebase that is tangled, difficult to read, and hard to maintain.
- To avoid this problem in JS, OOP introduced in JS.

## Parts/Components of OOP
Object literal => It is way to define an object using a simple, concise syntax.


- Constructor function
- Prototypes
- Classes
- Instances (new, this )

## 4 Pillars
#### The four pillars of Object-Oriented Programming (OOP) in JavaScript are Encapsulation, Abstraction, Inheritance, and Polymorphism. Here’s a simple breakdown of each pillar:

### 1. Encapsulation

- Definition: Encapsulation is the bundling of data (properties) and methods (functions) that operate on the data into a single unit or object.
- Key Point: It restricts direct access to some of an object's components, which helps protect the internal state of the object.
- Example: Using private properties (like #balance) in a class to control access to sensitive data.

### 2. Abstraction

- Definition: Abstraction involves hiding the complex implementation details and exposing only the necessary parts of an object.
- Key Point: It simplifies interactions with complex systems, allowing users to focus on the interface rather than the underlying complexity.
- Example: A car class that has methods like start() and stop(), but the internal workings of the engine are hidden from the user.

### 3. Inheritance

- Definition: Inheritance allows one class (child or derived class) to inherit properties and methods from another class (parent or base class).
- Key Point: It promotes code reuse and establishes a hierarchical relationship between classes.
- Example: A Vehicle class that has basic properties, while a Car class inherits from it and adds specific features.

### 4. Polymorphism

- Definition: Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to represent different underlying forms (data types).

- Key Point: This allows for methods to be overridden in derived classes, enabling flexibility and dynamic behavior.

- Example: A speak() method in an Animal class that behaves differently when called on a Dog or a Cat object.







______________________________

-> Pt. to Ponder

1. Does JS have classes?

    -> No, technically there is no classes in JS till date.

    -> Classes feature was introduced with ECMAScript 2015 specification (referred to as ES6). However, imp. to note that JS primarily a prototype-based language.

    -> Its classes are primarily syntactic sugar over.

    -> In other words, it provides a more familiar syntax for developers coming form class-based languages such as Java or C++.

