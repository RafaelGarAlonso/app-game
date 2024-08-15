import { render } from '@testing-library/react';
import { Navbar } from '../Navbar';

describe('Test <Navbar />', () => {

  test('Check snapshot component', () => {
    const { container } = render(<Navbar userName="Manolo" points="100" />);
    expect(container).toMatchSnapshot();
  });

  test('Check that data is rendered', () => {
    const { container } = render(<Navbar userName="Manolo" points="100" />);
    const userName = container.querySelector(".name").innerHTML;
    const points = container.querySelector(".points").innerHTML;

    expect(userName).toBe("Name: Manolo");
    expect(points).toBe("Points: 100");
  });

});