import axios from 'axios';
import PropTypes from 'prop-types';
 

const fetchHits = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
    return axios
        .get(`https:pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=20314649-0be4b13706b99da5b0e7a5a44&image_type=photo&orientation=horizontal&per_page=${pageSize}`,)
        .then(response =>
            response.data.hits);
  
};


fetchHits.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number
};


export default { fetchHits };