import { render } from '@testing-library/react';
import { DataTable } from '../DataTable';

const DATA_TABLE_HEADERS = ['#', 'Username', 'Points'];

const INIT_USERS_TABLE = [
  {
    userName: "Manolo",
    points: 100
  },
  {
    userName: "Pepe",
    points: 88
  },
  {
    userName: "Benito",
    points: 50
  }
];

describe('Test <DataTable />', () => {

  test('Check snapshot component', () => {
    const { container } = render(<DataTable headers={DATA_TABLE_HEADERS} rows={INIT_USERS_TABLE} />);
    expect(container).toMatchSnapshot();
    ;
  });

  test('Check that data is rendered', () => {
    const { container } = render(<DataTable headers={DATA_TABLE_HEADERS} rows={INIT_USERS_TABLE} />);
    const head01 = container.querySelectorAll("th")[1].textContent;
    const head02 = container.querySelectorAll("th")[2].textContent;
    const row01 = container.querySelectorAll("td")[1].textContent;
    const row02 = container.querySelectorAll("td")[2].textContent;

    expect(head01).toBe(DATA_TABLE_HEADERS[1]);
    expect(head02).toBe(DATA_TABLE_HEADERS[2]);
    expect(row01).toBe(INIT_USERS_TABLE[0].userName);
    expect(row02).toBe(INIT_USERS_TABLE[0].points.toString());
    ;
  });

  test('Check that data is rendered', () => {
    const { container } = render(<DataTable headers={DATA_TABLE_HEADERS} rows={[]} />);
    const emptyList = container.querySelector("tbody").textContent;
    expect(emptyList).toBe("EMPTY LIST");
  });

});