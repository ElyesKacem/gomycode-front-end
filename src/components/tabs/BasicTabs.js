import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Editor from '../Editor';
import useLocalStorage from '../../hooks/useLocalStorage';
import Navigator from '../Navigator/Navigator';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = React.useState("");

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<>

    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',backgroundColor:'#4a5667'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{textTransform:"none"}} label="Index.html" {...a11yProps(0)} />
          <Tab style={{textTransform:"none"}} label="Style.css" {...a11yProps(1)} />
          <Tab style={{textTransform:"none"}} label="Script.js" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </TabPanel>
    </Box>
    <br/>
    <Navigator srcDoc={srcDoc}/>
    </>
  );
}
