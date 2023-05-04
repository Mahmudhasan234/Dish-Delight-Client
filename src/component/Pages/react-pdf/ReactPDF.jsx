import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";


const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>
        
        <Text style={styles.text}> 
Q&A

            1.Tell us the differences between uncontrolled and controlled components.

                    In the context of web development, controlled and uncontrolled components refer to two approaches for handling form data input in React.js, a popular JavaScript library.

                    An uncontrolled component is a form input element that manages its state internally, without any help from React. The state of the component is stored in the DOM, and not in the React component. When a user enters data into the form, the data is stored directly in the DOM, and not in the React state. Uncontrolled components are typically simpler to implement, as they require less code. However, they can be harder to validate and manage, especially when dealing with complex form data.

                    On the other hand, a controlled component is a form input element that is fully controlled by the React component. The state of the component is managed entirely by React, and not by the DOM. When a user enters data into a controlled component, the data is immediately reflected in the React state, which can then be used to validate, manipulate, or submit the form data. Controlled components are more flexible and powerful, as they give the developer complete control over the form data. However, they require more code to implement, and can be harder to set up and manage, especially for larger forms.

                    In summary, the main difference between controlled and uncontrolled components is the way they manage form data input. Uncontrolled components manage their state internally, while controlled components are fully controlled by the React component. Controlled components give the developer more control over the form data, but require more code to implement, while uncontrolled components are simpler to set up, but can be harder to manage.
          
            2.How to validate React props using PropTypes?
                To validate React props using PropTypes,  need to follow these steps:

                    1. Import PropTypes

                    2. Define the propTypes property for  component and set it to an object that describes the prop types.

                    3. In the above example, we have used a few PropTypes validators, such as "string", "number", "bool", and "arrayOf". PropTypes has a variety of validators to choose from to ensure that  props are of the correct type.

                    4.  can also use PropTypes.shape to define an object with specific properties and their corresponding PropTypes validators.

           3.Tell us the difference between nodejs and express js.Node.js and Express.js are two related technologies that are often used together to build web applications. Node.js is a server-side JavaScript runtime environment, while Express.js is a lightweight web framework built on top of Node.js. Here are the key differences between Node.js and Express.js:

                    1. Functionality: Node.js is a runtime environment that allows  to run JavaScript on the server-side. It provides the core functionality for building server-side applications, such as handling HTTP requests and responses, reading and writing files, and interacting with databases. Express.js, on the other hand, is a web framework that sits on top of Node.js and provides additional functionality for building web applications, such as routing, middleware, and templating.

                    2. Modularity: Node.js provides a set of built-in modules for common server-side tasks, such as file system access and networking. Express.js is designed to be modular, so  can choose which parts of the framework  want to use and customize it to fit  needs.

                    3. Routing: Express.js provides a simple and flexible routing system that allows  to define routes for handling HTTP requests. Node.js doesn't provide this functionality out of the box, so  would have to build it self or use a third-party library.

                    4. Middleware: Express.js provides middleware functionality, which allows  to add functionality to  application's request-response cycle. This could include logging, authentication, or compression. Node.js doesn't provide this functionality out of the box, so  would have to build it self or use a third-party library.

                    5. Code Complexity: Express.js can simplify code complexity and streamline the development process. By providing a set of predefined APIs and tools, it can make it easier to build web applications quickly. Node.js requires more coding, which can lead to more complex code and a longer development time.

                    In summary, Node.js is a runtime environment for executing JavaScript on the server-side, while Express.js is a web framework built on top of Node.js that provides additional functionality for building web applications. Express.js simplifies the development process by providing a set of predefined APIs and tools, while Node.js requires more coding but provides more flexibility.
         4.What is a custom hook, and why will  create a custom hook?
            In React, a custom hook is a JavaScript function that uses one or more of React's built-in hooks and/or other custom hooks to encapsulate and reuse stateful logic. Custom hooks allow  to extract reusable logic from a component and share it between multiple components, making  code more modular and easier to maintain.

                    Here are some reasons why  might want to create a custom hook:

                    1. Reusability: Custom hooks allow  to extract and reuse stateful logic that can be used in multiple components throughout  application. This can make  code more modular, easier to maintain, and more reusable.

                    2. Abstraction: Custom hooks can help  abstract away complex logic and provide a simpler interface to components that need it. This can make  code more readable and easier to reason about.

                    3. Separation of Concerns: Custom hooks can help  separate concerns between components and logic. This can lead to better organization, more maintainable code, and easier debugging.

                    4. Composition: Custom hooks can be composed together to create more complex hooks that can be used in more advanced scenarios. This can allow  to build up a library of reusable hooks that can be used throughout the application.
           
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;