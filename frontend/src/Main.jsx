import React from "react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { modulesState } from "./App";
import PropTypes from "prop-types";

import AiAssistant from "./components/aiassistant/AiAssistant";
import Analyzer from "./components/ioc-analyzer/Analyzer";
import EmailAnalyzer from "./components/email-analyzer/EmailAnalyzer";
import Extractor from "./components/ioc-extractor/Extractor";
import Header from "./components/Header";
import Monitoring from "./components/domain-monitoring/Monitoring";
import Newsfeed from "./components/newsfeed/Newsfeed";
import Settings from "./components/settings/Settings";

import Box from "@mui/material/Box";
import CalculateIcon from "@mui/icons-material/Calculate";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import MailIcon from "@mui/icons-material/Mail";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Paper } from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RuleIcon from "@mui/icons-material/Rule";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import Sigma from "./components/rule-creator/Sigma";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import CvssCalculator from "./components/cvss-calculator/CvssCalculator";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';



export default function Main() {
  const modules = useRecoilValue(modulesState);

  function getLowestTabIndex() {
    if (modules["Newsfeed"].enabled) {
      return 0;
    } else if (modules["IOC Analyzer"].enabled) {
      return 1;
    } else if (modules["Email Analyzer"].enabled) {
      return 2;
    } else if (modules["IOC Extractor"].enabled) {
      return 3;
    } else if (modules["Domain Monitoring"].enabled) {
      return 4;
    } else if (modules["AI Assistant"].enabled) {
      return 5;
    } else if (modules["CVSS Calculator"].enabled) {
      return 6;
    } else if (modules["Rules"].enabled) {
      return 7;
    } else {
      return 8;
    }
  }

  // State for tab value
  const [value, setValue] = useState(getLowestTabIndex());
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        key={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <div>{children}</div>}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#536475" }}>
    <SignedOut>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", color: "#FFFFFF", marginBottom: "2rem" }}>
          Welcome to the OSINT Toolkit!
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#FFFFFF", marginBottom: "2rem" }}>
          This toolkit is designed to assist you in Open Source Intelligence (OSINT) investigations. It provides a range of powerful tools and features to help you gather, analyze, and extract valuable information from various sources.
        </p>
        <p style={{ fontSize: "1.2rem", color: "#FFFFFF", marginBottom: "2rem" }}>
          With the OSINT Toolkit, you can stay up-to-date with the latest news, analyze IOCs (Indicators of Compromise), extract relevant information, monitor domains, and even get assistance from our AI-powered assistant. Additionally, you can calculate CVSS scores, create custom rules, and customize your settings to suit your needs.
        </p>
        <p style={{ fontSize: "1.2rem", color: "#FFFFFF", marginBottom: "2rem" }}>
          To get started, simply select one of the tabs below to access the corresponding tool or feature. Each tab represents a different module of the toolkit, allowing you to seamlessly navigate between them.
        </p>
        <p style={{ fontSize: "1.2rem", color: "#FFFFFF", marginBottom: "2rem" }}>
          We hope you find the OSINT Toolkit valuable and that it enhances your OSINT investigations. Happy exploring!
        </p>
        <SignInButton style={{ padding: "1rem 2rem", backgroundColor: "#3B82F6", color: "#FFFFFF", borderRadius: "0.5rem", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", transition: "background-color 0.3s ease-in-out" }} />
      </div>
    </SignedOut>
    <SignedIn>
    <div style={{ position: "absolute", top: 0, right: 0, padding: "1rem" }}>
    <p style={{ fontSize: "1.2rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>
        User Profile
      </p>
        <UserButton style={{ fontSize: "1.5rem" }} />
    </div>
    <Paper
      sx={{
        minWidth: "450px",
        minHeight: "300px",
        maxWidth: "1450px",
        margin: "30px auto",
        padding: "30px",
        borderRadius: 5,
        overflow: "auto",
        boxShadow: "5",
      }}
    >
      <Header />

      <Box display="flex" justifyContent="center" width="100%">
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          value={value}
          onChange={handleChange}
        >
          {modules["Newsfeed"].enabled ? (
            <Tab value={0} icon={<NewspaperIcon />} label="Newsfeed" />
          ) : null}
          {modules["IOC Analyzer"].enabled ? (
            <Tab value={1} icon={<SearchIcon />} label="IOC Analyzer" />
          ) : null}
          {modules["Email Analyzer"].enabled ? (
            <Tab value={2} icon={<MailIcon />} label="Email Analyzer" />
          ) : null}
          {modules["IOC Extractor"].enabled ? (
            <Tab
              value={3}
              icon={<DocumentScannerIcon />}
              label="IOC Extractor"
            />
          ) : null}
          {modules["Domain Monitoring"].enabled ? (
            <Tab
              value={4}
              icon={<TravelExploreIcon />}
              label="Domain Monitoring"
            />
          ) : null}
          {modules["AI Assistant"].enabled ? (
            <Tab value={5} icon={<PsychologyIcon />} label="AI Assistant" />
          ) : null}
          {modules["CVSS Calculator"].enabled ? (
            <Tab value={6} icon={<CalculateIcon />} label="CVSS Calculator" />
          ) : null}
          {modules["Rules"].enabled ? (
            <Tab value={7} icon={<RuleIcon />} label="Rules" />
          ) : null}

          <Tab value={8} icon={<SettingsIcon />} label="Settings" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Newsfeed />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Analyzer />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EmailAnalyzer />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Extractor />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Monitoring />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AiAssistant />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <CvssCalculator />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Sigma />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Settings />
      </TabPanel>
    </Paper>
    </SignedIn>
    </div>
  );
}
