# E-Commerce Platform

## About The Project

This E-Commerce Platform is a React-based application designed to provide users with an intuitive shopping experience. Users can browse products, view detailed information, add items to their cart, and proceed to checkout. The application emphasizes usability, efficient navigation, and a seamless checkout process.

<a name="readme-top"></a>

<details open>
<summary>Table of Contents</summary>
<ul>
  <li><a href="#about-the-project">About The Project</a></li>
  <li><a href="#built-with">Built With</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#prerequisites">Prerequisites</a></li>
  <li><a href="#installation-and-running-the-app">Installation and Running the App</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#roadmap">Roadmap</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#acknowledgements">Acknowledgements</a></li>
</ul>
</details>

### Built With

* [![React][React.js]][React-url]
* [![React Router][ReactRouter-dom.js]][ReactRouter-dom-url]
* [![Axios][Axios.js]][Axios-url]

### Features

1. **Product Browsing:**
   - Users can view a list of products.
   - Product details can be accessed by clicking on individual products, providing more information such as descriptions, prices, discounts, ratings, and images.

2. **Search Functionality:**
   - The platform includes a search feature that allows users to find products by keywords.
   - Users can filter products by categories, improving the search experience.

3. **Shopping Cart:**
   - Users can add products to a shopping cart.
   - Within the cart, users can adjust the quantity of each item or remove items as needed.
   - The cart dynamically calculates and displays the total price of items added.

4. **Checkout Process:**
   - The platform features a checkout process where users can review their order before finalizing it.
   - A mock checkout function simulates the process of placing an order, including order processing and clearing the shopping cart.

5. **Ratings System:**
   - The application visually represents product ratings with a star system, enhancing the presentation of product feedback received from users. This feature aids users in making informed purchasing decisions based on product popularity and quality.

6. **Modern Web Technologies:**
   - Built with React, the web showcases efficient state management and component-based architecture.
   - Axios is used for HTTP requests, fetching product data from dummy APIs: https://dummyjson.com/docs.
   - React Router facilitates navigation between different parts of the application without reloading the page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

```sh
npm install npm@latest -g
```
## Installation and Running the App

### 1. Clone the repo

```sh
https://github.com/Peters-17/E-commerce-Platform.git
```
### 2. Install NPM packages

```sh
npm install
```
### 3. Install react-router-dom for routing

```sh
npm install react-router-dom

```

### 4. Run the project

```sh
npm start

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Usage

The E-Commerce Platform allows users to:

- **Search for products**
  
#### Based on categories(All categories):
![usage1](https://github.com/Peters-17/E-commerce-Platform/assets/85666623/740adb96-1225-469a-922c-cc0fe7407de5)

#### Based on categories(Specific categories):
![usage2](https://github.com/Peters-17/E-commerce-Platform/assets/85666623/4c43be4b-2a75-4d02-91ad-8978f1d16301)

#### Based on keywords:
![usage3](https://github.com/Peters-17/E-commerce-Platform/assets/85666623/3bf019ea-84f0-4236-bd25-e26f815bbfa6)


- **View product details** by clicking "Click to learn more" button.
![image](https://github.com/Peters-17/E-commerce-Platform/assets/85666623/f300f7b7-a762-44f1-b820-e4ab46a18f25)

- **Add products to the cart**, adjust quantities or remove items.
![image](https://github.com/Peters-17/E-commerce-Platform/assets/85666623/b9244009-e06f-4b52-95f1-40a13172ea3d)

- **Checkout** with a summary of the total price and a mock order confirmation feature.
![image](https://github.com/Peters-17/E-commerce-Platform/assets/85666623/8fc4189f-728a-4d36-be89-128e2a6940c8)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

### Development Process

- [x] **Component Development:**
  - [x] **Search Component:** Development of the search functionality to allow users to find products by keywords and categories.
  - [x] **Product List Component:** Implementation of the product listing, enabling users to browse through the available products.
  - [x] **Product Details Component:** Creation of detailed product pages, offering more information such as descriptions, prices, discounts, ratings, and images.
  - [x] **Cart Component:** Development of the shopping cart system, allowing users to add products to their cart, adjust quantities, or remove items.
  - [x] **Checkout Component:** Establishment of a mock checkout process where users can review their order before finalizing it.
  - [x] **Rating System:** Implementation of a visual representation system to display product ratings using a star format.
  
### Future Development Plans

- [ ] **User Authentication:**
  - [ ] Introduce user authentication functionality to provide personalized shopping experiences.
- [ ] **Payment Integration:**
  - [ ] Implement real payment methods to process transactions securely.
- [ ] **Database and Backend Development:**
  - [ ] Develop a user database to support account management and history tracking.
  - [ ] Establish a backend system to manage products, orders, and user information effectively.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Haoyang Yuan - haoyangy2000@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgements

- [README Template](https://github.com/othneildrew/Best-README-Template)
- [React](https://react.dev/learn)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Axios.js]: https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/
[ReactRouter-dom.js]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[ReactRouter-dom-url]: https://reactrouter.com/
