#,
    {
      icon: <DesignIdeas24Regular />,
      primaryText: "Visualize and manage your data efficiently",
    },
  ];

  return (
    <div className={styles.root}>
      <Header logo="assets/logo-filled.png" title={props.title} message="Welcome to AI Spreadsheet Adjuster" />
      <HeroList message="Discover what AI Spreadsheet Adjuster can do for you today!" items={listItems} />
      <TextInsertion />
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
