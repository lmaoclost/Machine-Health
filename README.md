# Machine Health
A Study project that create a app to predict a probability of having diabetes with Machine Learning. The machine learning model was developed using [GradienteBoosting](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingClassifier.html). The NodeJS was used to create the API and React Native with expo was used to create the App.

## Some Images

### Mobile
<div align="center">
  <div style="display: flex; flex-direction: 'row'; align-items: 'center';">
    <img alt="initialPage" src="https://github.com/lmaoclost/Machine-Health/blob/master/.github/initialPage.jpg" width="250px">
    <img alt="diabetesForm" src="https://github.com/lmaoclost/Machine-Health/blob/master/.github/diabetesForm.jpg" width="250px">
    <img alt="diabetesResult" src="https://github.com/lmaoclost/Machine-Health/blob/master/.github/diabetesResult.jpg" width="250px">
  </div>
</div>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

[Anaconda](https://www.anaconda.com/products/individual), [Node](https://nodejs.org/en/download/), [Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable), [Expo](https://docs.expo.io/get-started/installation/) and a text editor. This project was developed using VSCode on Ubuntu.

### Machine Learning
This Project was built with Anaconda 2020-02 which is machine learning toolkit. It was installed using [Python](https://www.python.org/) Version Management called [pyenv](https://github.com/pyenv/pyenv).

The used database was selected from [Kaggle](https://www.kaggle.com/uciml/pima-indians-diabetes-database) which is a Indian database about diabetes. It was used Gradient Bossting model for classification. If you wish to see the process to build the machine model algorithm you can access at [Kaggle](https://www.kaggle.com/juniorcl/diabetesclassification-tunedgradientboosting-90) or [Github](https://github.com/juniorcl/data-science-projects/tree/master/Classification/Diabetes%20Prediction%20-%20Grandient%20Boosting%20Classifier).



### BackEnd
Go to a terminal.
```
$ cd /server
$ yarn
$ yarn start
```

The Backend will be running in the http://localhost:3000. To test the routes, I'm leaving this [Insomnia file](Insomnia_2020-08-21.json).

### Mobile

This project uses Expo, so make sure that you have it. Go to [Api.ts](https://github.com/lmaoclost/Machine-Health/blob/master/mobile/src/services/api.ts) and change the baseURL to the server IP. If you're running the backend on localhost, the IP has the be one in the expo page.
```
$ cd /mobile
$ yarn
$ yarn start
```
Go to the expo page and connect.

## Built With

* ### Data Science
    * [Anaconda](https://www.anaconda.com/products/individual) - Data science toolkit
    * [Numpy](https://numpy.org/) - Library to array calculation
    * [Pandas](https://pandas.pydata.org/) - Library to load and database processing
    * [Python](https://www.python.org/) - Language for Data Science
    * [Sklearn](https://scikit-learn.org/stable/index.html) - Machine learning library

* ### API and Mobile
    * [Typescript](https://devdocs.io/typescript/) - Main Language
    * [Node.js](https://nodejs.org/en/) - Backend framework
    * [React Native](https://facebook.github.io/react-native/) - JS framework for APPs
    * [Expo](https://expo.io/) - Used to improve the app development

## Authors
* **Renan Oliveira** - [GitHub](https://github.com/lmaoclost), [LinkedIn](https://www.linkedin.com/in/renansmoliveira/)
* **Clébio Oliveira Júnior** - [Github](https://www.github.com/juniorcl), [Linkedin](https://www.linkedin.com/in/clebiojunior), [DEV](https://www.dev.to/juniorcl)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details