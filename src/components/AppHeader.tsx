interface AppHeaderProps {
  title: string;
}

function AppHeader({ title }: AppHeaderProps): JSX.Element {
  return <h1 onClick={() => window.alert(`You've clicked the header`)}>{title}</h1>;
}

export default AppHeader;
