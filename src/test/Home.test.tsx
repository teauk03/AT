import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('<Home />', () => {
    it('renders a heading', () => {
        const { container } = render(<Home />);

        const home = screen.getByText('Arduino');

        expect(home).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });
});