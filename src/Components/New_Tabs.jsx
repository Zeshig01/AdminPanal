import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from '@mui/material';
import {
  Payments as PaymentsIcon,
  DocumentScanner as DocumentScannerIcon,
  LocalAtm as LocalAtmIcon,
  CalendarMonth as CalendarMonthIcon,
  Accessibility as AccessibilityIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import logo from '../assets/logo.png';
import Pay_Roll from './Pay_Roll/Pay_Roll';
import Staff from './Staff/Staff';
import Attendance from './Attendance/Attendance';
import PayHeads from './Pay_Heads/PayHeads';
import Salaries from './Salaries/Salaries';
import Leaves from './Leaves/Leaves';
import Report from './Report/Report';

function New_Tabs() {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [selectedTab, setSelectedTab] = useState(0);
  const [mobile, setMobile] = useState(false);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Detect screen size and update mobile state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Content for each tab
  const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return <Staff/> ;
      case 1:
        return <Pay_Roll />;
      case 2:
        return <Attendance />;
      case 3:
        return <PayHeads />;
      case 4:
        return <Salaries />;
      case 5:
        return <Leaves />;
      case 6:
        return <Report />;
      default:
        return <div>Home</div>;
    }
  };

  return (
    <div className="flex">
      {/* Left Panel with Tabs for Desktop */}
      <div className="hidden w-[20%] bg-gradient-to-tr from-fuchsia-700 to-pink-500 md:flex pt-7 pl-9 flex-col min-h-screen">
        <div>
          <div className="w-32 h-32 rounded-xl ml-5 mb-10">
            <img className="w-32 h-32 rounded-full" src={logo} alt="" />
          </div>
          <Tabs
            orientation="vertical"
            value={selectedTab}
            onChange={handleChange}
            sx={{
              '& .MuiTab-root': {
                color: 'white',
                display: 'flex',
                justifyContent: 'flex-start',
                textTransform: 'none',
                fontSize: '0.875rem',
                minHeight: '40px',
                padding: '8px 16px',
                marginBottom: '8px',
              },
              '& .Mui-selected': {
                color: '#a55993 !important',
                fontWeight: 'bold',
                backgroundColor: 'white',
                borderTopLeftRadius: '29px',
                borderBottomLeftRadius: '29px',
              },
              '& .MuiTabs-indicator': {
                display: 'none',
              },
            }}
          >
            <Tab icon={<PaymentsIcon />} iconPosition="start" label="Staff" />
            <Tab icon={<AccessibilityIcon />} iconPosition="start" label="Pay Roll " />
            <Tab icon={<DocumentScannerIcon />} iconPosition="start" label="Attendance" />
            <Tab icon={<CalendarMonthIcon />} iconPosition="start" label="Pay Heads" />
            <Tab icon={<LocalAtmIcon />} iconPosition="start" label="Salaries" />
            <Tab icon={<CalendarMonthIcon />} iconPosition="start" label="Leaves" />
            <Tab icon={<DocumentScannerIcon />} iconPosition="start" label="Reports" />
          </Tabs>
        </div>
        <button className="bg-white pt-2 pb-2 mr-12 ml-5 mt-10 rounded text-pink-600 font-bold">
          Logout
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center p-4">
        <button onClick={() => setMenuOpen(!menuOpen)} className=" text-black z-20">
          {menuOpen ? <CloseIcon /> : <MenuIcon />} {/* Toggle icon based on menu state */}
        </button>
      </div>

      {/* Mobile Sidebar (Only visible when menuOpen is true) */}
      {menuOpen && mobile && (
        <div className=" py-4 absolute left-0 top-0 z-20 w-[80%] bg-gradient-to-tr from-fuchsia-700 to-pink-500 min-h-screen">
          <div>
            <div className='flex justify-between mr-10'>
            <div className="w-32 h-32 rounded-xl ml-5 mb-10">
              <img className="w-32 h-32 rounded-full" src={logo} alt="" />
            </div>
           <div> <button onClick={()=>setMenuOpen(false)} className='px-4 py-3 mt-6 rounded-lg bg-white'> X</button></div>
            </div>
            <Tabs
              orientation="vertical"
              value={selectedTab}
              onChange={handleChange}
              sx={{
                '& .MuiTab-root': {
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  minHeight: '40px',
                  padding: '8px 16px',
                  marginBottom: '8px',
                },
                '& .Mui-selected': {
                  color: '#a55993 !important',
                  fontWeight: 'bold',
                  backgroundColor: 'white',
                  borderTopLeftRadius: '29px',
                  borderBottomLeftRadius: '29px',
                },
                '& .MuiTabs-indicator': {
                  display: 'none',
                },
              }}
            >
              <Tab icon={<PaymentsIcon />} iconPosition="start" label="Pay Roll" onClick={() => setMenuOpen(false)}  />
              <Tab icon={<AccessibilityIcon />} iconPosition="start" label="Staff " onClick={()=>setMenuOpen(false)}/>
              <Tab icon={<DocumentScannerIcon />} iconPosition="start" label="Attendance"  onClick={() => setMenuOpen(false)} />
              <Tab icon={<CalendarMonthIcon />} iconPosition="start" label="Pay Heads" />
              <Tab icon={<LocalAtmIcon />} iconPosition="start" label="Salaries" />
              <Tab icon={<CalendarMonthIcon />} iconPosition="start" label="Leaves" />
              <Tab icon={<DocumentScannerIcon />} iconPosition="start" label="Reports" />
            </Tabs>
          </div>
          <button className="bg-white pt-2 pb-2 mr-12 ml-5 mt-10 rounded text-pink-600 font-bold">
            Logout
          </button>
        </div>
      )}

      {/* Right Panel for Tab Content */}
      <div className="w-full md:w-[80%] h-auto bg-gray-100 p-10">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default New_Tabs;
