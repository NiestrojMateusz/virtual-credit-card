import { Link } from 'react-router-dom';
import { FocusPageLayout, HeroTitle, MainMenu } from '../../design-system';

export const LandingPage = () => {
    return (
        <FocusPageLayout>
            <HeroTitle title="Fintech app" />
            <MainMenu>
                <MainMenu.Item>
                    <Link to="/wip">My accounts</Link>
                </MainMenu.Item>
                <MainMenu.Item>
                    <Link to="/wip">My cards</Link>
                </MainMenu.Item>
                <MainMenu.Item>
                    <Link to="/virtual-card">Virtual card</Link>
                </MainMenu.Item>
                <MainMenu.Item>
                    <Link to="/wip">Portfolio</Link>
                </MainMenu.Item>
                <MainMenu.Item>
                    <Link to="/wip">Financial Health</Link>
                </MainMenu.Item>
                <MainMenu.Item>
                    <Link to="/wip">Cashbacks</Link>
                </MainMenu.Item>
            </MainMenu>
        </FocusPageLayout>
    );
};
