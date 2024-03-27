const POSTDATA =  [
    {
      "id": "1",
      "Title": "Type Script",
      "Description": "In the realm of web development, I embarked on an ambitious journey to craft a fully functional e-commerce website that stands as a testament to modernity and responsiveness. The task at hand was not merely about creating an online store but rather a comprehensive digital marketplace that redefines the user experience. With an unwavering commitment to excellence, I meticulously designed and implemented a plethora of features to elevate the website's functionality.\n\nThe heart of the e-commerce platform lies in its product catalog, meticulously curated to cater to diverse customer needs. From the latest gadgets to trendy fashion apparel, every item finds its place in the catalog, creating a virtual shopping haven for users. The seamless integration of intuitive search and filter functionalities ensures that users can effortlessly navigate through the extensive catalog, finding precisely what they desire.\n\nUser authentication, a cornerstone of secure online experiences, was implemented with the utmost care. Leveraging industry-best practices, I employed robust authentication mechanisms to safeguard user accounts and sensitive information. This not only instills trust in users but also ensures a secure environment for transactions, fostering a sense of reliability.\n\nTo power the frontend, I turned to the dynamic React library, known for its flexibility and efficiency. The user interface, crafted with React components, exudes a modern and engaging design, captivating visitors from the moment they land on the website. On the backend, the powerful duo of Node.js and Express brings forth a robust infrastructure, handling data processing and ensuring seamless communication between the client and server.\n\nThe payment processing module, a critical aspect of any e-commerce venture, underwent meticulous development to guarantee security and efficiency. Integrated with secure payment gateways, the platform facilitates smooth transactions, contributing to an overall positive user experience.\n\nThe results of this endeavor have been nothing short of remarkable. The e-commerce website has not only enhanced user experience but has also significantly increased sales. Users now enjoy a seamless online shopping experience, navigating through a feature-rich interface that prioritizes convenience and aesthetics.\n\nIn conclusion, this e-commerce project represents a culmination of technical prowess and a user-centric approach. It stands tall as a testament to the endless possibilities in web development when fueled by innovation and a commitment to excellence. The seamless integration of technologies like React and Node.js has not only created a powerful platform but has also set new standards in the world of online commerce.",
      "Conclusion": "The e-commerce website stands as a shining example of technological innovation and user-centric design. Its extensive product catalog, secure authentication, and efficient payment processing redefine the online shopping experience. With the successful implementation of cutting-edge technologies like React and Node.js, the platform has not only met but exceeded expectations. The positive impact on user experience and the substantial increase in sales underscore the success of this ambitious project.",
      "Image": "https://res.cloudinary.com/dfyuyadhv/image/upload/v1709715693/pngwing.com_23_aldjbr.png",
      "Category": "Web Development"
    },
    
    {
      id: '2',
      "Title": "React in Web-Dev",
      "Description": "Designed and developed a cross-platform mobile application using Flutter framework. Implemented intuitive user interfaces and integrated with backend APIs to fetch and display real-time data. Conducted thorough testing and optimization for a smooth user experience.",
      "Conclusion": "The mobile app gained positive reviews on app stores and achieved high user engagement, contributing to the growth of the client's business.",
      "Image": "https://res.cloudinary.com/dfyuyadhv/image/upload/v1709716059/pngwing.com_25_lekvbg.png",
      "Category": "Mobile App Development"
    },
    {
      id: '3',
      "Title": "New Era of Next.js",
      "Description": "Created a data analysis dashboard for visualizing complex datasets. Used technologies such as Python with pandas and Plotly for data processing and visualization. Implemented interactive charts and graphs to provide valuable insights.",
      "Conclusion": "The data analysis dashboard played a crucial role in decision-making by providing clear and actionable insights from large datasets.",
      "Image": "https://res.cloudinary.com/dfyuyadhv/image/upload/v1709716029/pngwing.com_24_gookve.png",
      "Category": "Data Science"
    },
    {
      id: '4',
      "Title": "React in Web-Dev",
      "Description": "Designed and developed a cross-platform mobile application using Flutter framework. Implemented intuitive user interfaces and integrated with backend APIs to fetch and display real-time data. Conducted thorough testing and optimization for a smooth user experience.",
      "Conclusion": "The mobile app gained positive reviews on app stores and achieved high user engagement, contributing to the growth of the client's business.",
      "Image": "https://res.cloudinary.com/dfyuyadhv/image/upload/v1709716059/pngwing.com_25_lekvbg.png",
      "Category": "Mobile App Development"
    },
  ];
  
export async function GET(request) {
    const value=request.nextUrl.searchParams
    const id=value.get("id")
  if (!id) {
    // If no ID is provided, return all POSTDATA
    return Response.json(POSTDATA);
  } else {
    const selectedItem = POSTDATA.find((item) => item.id === id);

    if (selectedItem) {
      // If the item is found, return its data
      return Response.json(selectedItem);
    } else {
      // If the item is not found, return 404 Not Found
      return Response.json({ message: "Item not found" });
    }
  }
}
