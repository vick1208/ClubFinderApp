import Utils from '../utils.js';
import Clubs from '../data/local/clubs.js';

const home = () => {

  const searchFormElement = document.querySelector('search-bar');

  const clubListContainerElement = document.querySelector('#clubListContainer');
  const clubQueryWaitingElement = clubListContainerElement.querySelector('.query-waiting');
  const clubLoadingElement = clubListContainerElement.querySelector('search-loading');
  const clubListElement = clubListContainerElement.querySelector('club-list');
  
  const showSportClub = (query) => {
    showLoading();

    const result = Clubs.searchClub(query);
    displayResult(result);

    showClubList();
  };

  const onSearchHandler = (e) =>{
      e.preventDefault();

      const {query} = e.detail;
      showSportClub(query);
  };


  const displayResult = (clubs) => {
    const clubItemsElements = clubs.map((club) => {

      const clubItemElement = document.createElement('club-item');
      clubItemElement.club = club;
      return clubItemElement;
    });

    Utils.emptyElement(clubListElement);

    clubListElement.append(...clubItemsElements);

  };

  const showLoading = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubLoadingElement);
  };

  const showClubList = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubListElement);
  };

  const showQueryWaiting = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubQueryWaitingElement);
  };

  searchFormElement.addEventListener('search',onSearchHandler);
  showQueryWaiting();
};

export default home;
