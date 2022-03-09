import React, { Component } from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

class SearchBar extends Component {
    state = {
        searchTerm: '',
    }

    handleSearch = (e) => {
        this.setState({ searchTerm: e.target.value });
    }

    handleSubmit = (e) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);
        this.setState({ searchTerm: '' });
        e.preventDefault();
    }

    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleSearch} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar
