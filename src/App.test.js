import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './config/store';
import { mockUsers } from './mock'
import App from './App';

const renderComponent = () => {
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockUsers),
    url: 'test/usuarios.json'
  })
});

describe('Search', () => {
  test('Should render an input to search', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('search')).toBeInTheDocument();
  });

  test('Should do a search when pressing the enter button', async () => {
    const { getByTestId } = renderComponent();
    /* Select the input */
    const inputSearch = getByTestId('search');

    /* Adds a query */
    inputSearch.value = '2016';

    /* Executes the search by pressing the enter button */
    fireEvent.keyUp(inputSearch, { key: 'Enter', code: 'Enter', keyCode: 13 });

    /* Listens for any change in the store after receiving the response */
    store.subscribe(() => {
      const { result } = store.getState().search;

      /* Checks if the stored data is equal to the mocked data and what was searched */
      expect(result.usuarios).toEqual(mockUsers);
    });
  });

  test('Should render the modules properly after doing a search', async () => {
    const { getByTestId, getByText } = renderComponent();
    /* Select the input */
    const inputSearch = getByTestId('search');

    /* Adds a query */
    inputSearch.value = '2016';

    /* Executes the search by pressing the enter button */
    fireEvent.keyUp(inputSearch, { key: 'Enter', code: 'Enter', keyCode: 13 });

    store.subscribe(() => {
      /* Checks for elements */
      const moduleTitle = getByText('usuarios');
      const nameUserCard = getByText(`${mockUsers[0].name.firstName}${mockUsers[0].name.lastName}`);
      const loadMoreButton = getByText('Cargar más');

      expect(moduleTitle).toBeInTheDocument();
      expect(nameUserCard).toBeInTheDocument();
      expect(loadMoreButton).toBeInTheDocument();
    });
  });
});
