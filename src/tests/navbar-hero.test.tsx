import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';

describe('Navbar and Hero Component Integration', () => {
  it('renders brand identity, navigation links, and valid resume link', () => {
    render(
      <ThemeProvider>
        <Navbar />
        <Hero />
      </ThemeProvider>
    );

    // Navbar tests with exact name matching
    expect(screen.getAllByText(/Rahadyan Danang/i)[0]).toBeDefined();
    expect(screen.getByRole('link', { name: /^Projects$/i })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: /^Capabilities$/i })).toHaveAttribute('href', '#skills');
    expect(screen.getByRole('link', { name: /^Experience$/i })).toHaveAttribute('href', '#experience');
    
    const resumeLinks = screen.getAllByRole('link', { name: /Resume/i });
    expect(resumeLinks[0]).toHaveAttribute('href', '/resume.pdf');

    // Hero tests
    expect(screen.getByText(/Software Engineer & Backend Specialist/i)).toBeDefined();
    expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute('href', 'https://github.com/Rahdansuwa24');
    expect(screen.getByRole('link', { name: /Send Email/i })).toHaveAttribute('href', 'mailto:rahadyandanang27@gmail.com');
  });

  it('toggles mobile menu when hamburger button is clicked', () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    );

    const menuButton = screen.getByLabelText(/Toggle Navigation Menu/i);
    expect(menuButton).toBeDefined();

    // Open mobile menu
    fireEvent.click(menuButton);
    expect(screen.getByTestId('mobile-menu')).toBeDefined();

    // Close mobile menu
    fireEvent.click(menuButton);
    expect(screen.queryByTestId('mobile-menu')).toBeNull();
  });
});
