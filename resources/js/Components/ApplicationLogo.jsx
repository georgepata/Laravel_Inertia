import supportLogo from '../../images/support_logo.png';

export default function ApplicationLogo({ alt = 'Logo', ...rest }) {
    return <img {...rest} src={supportLogo} alt={alt} />;
}
