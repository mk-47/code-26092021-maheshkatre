import React, { useEffect } from 'react';
import './App.css';
import CarItem from './components/car-list/carlist';
import Pagination from './components/pagination/pagination';
import Filters from './components/filters/filters';
import NavBar from './components/nav-bar/navBar';
import SearchBar from './components/search-bar/searchBar';
import { carData } from './mock-data/mock-data';
import './style.css';


function App() {

  const uniqueCompanyNames = [...new Set(carData.map(car => car.company))];
  uniqueCompanyNames.unshift("All Cars");

  // store data from api to local state
  const [carsDataApi, setNewCarsData] = React.useState(carData);

  // update data for pagination
  const [carDataForPage, updateCarDataForPage] = React.useState(carsDataApi.slice(0, 10));
  const [numberOfPages, updatePages] = React.useState(Math.ceil(carsDataApi.length / 10))

  // set filter to all cars
  const [selectedCompanyName, setselectedCompanyName] = React.useState('All Cars')

  // handle page change from pagination
  const handlePageClick = (e) => {
    updateCarDataForPage(carsDataApi.slice(((e * 10) - 10), e * 10))
  }

  // filter company name
  const handleCompanySelection = (e) => {
    setselectedCompanyName(e.target.innerText);
  }

  // handle search value
  const handleSearchClick = (value) => {
    const searchData = carsDataApi.filter( (cars)=> {
      if(cars.company.toLowerCase().includes(value) ||
          cars.car_color.toLowerCase().includes(value) ||
          cars.car_model.toLowerCase().includes(value)) {
            return true;
          } else {
            return false;
          }
    })
    setNewCarsData(searchData);
  }

  // update data when filter changed
  useEffect(()=> {
    if(selectedCompanyName !== 'All Cars') {
    setNewCarsData(carData.filter(car => car.company === selectedCompanyName));
    } else {
      setNewCarsData(carData);
    }
  },[selectedCompanyName])

  // update pagination data when local state changed
  useEffect(() => {
    updateCarDataForPage(carsDataApi.slice(0, 10));
    updatePages(Math.ceil(carsDataApi.length / 10));
  },[carsDataApi])


  return (
    <div className="container">
      <NavBar/>
      <SearchBar
        handleSearchClick={handleSearchClick}/>
        
      <div className="row">
        <div className='col-3'>
          <Filters
            selectedCompanyName={selectedCompanyName}
            companySelected={handleCompanySelection}
            companyNames={uniqueCompanyNames}/>
        </div>
        <div className="col">
          {carDataForPage.map(car => <CarItem key={car.id} data={car} />)}
          <Pagination
            pageClicked={handlePageClick}
            pages={numberOfPages} />
        </div>
      </div>
    </div>
  );
}

export default App;
