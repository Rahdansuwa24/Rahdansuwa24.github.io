import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TechRadarSection from '../components/sections/TechRadarSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import Footer from '../components/layout/Footer';

describe('TechRadar, Experience, and Footer Integration', () => {
  it('renders verified technical capabilities and category headlines', () => {
    render(<TechRadarSection />);

    expect(screen.getByText(/Verified Technical Capabilities/i)).toBeDefined();
    expect(screen.getByText(/Backend & Cloud Systems/i)).toBeDefined();
    expect(screen.getByText(/Node.js & Express/i)).toBeDefined();
    expect(screen.getByText(/Docker & Compose/i)).toBeDefined();
    expect(screen.getByText(/ONNX Runtime/i)).toBeDefined();
  });

  it('renders academic and professional experience timeline', () => {
    render(<ExperienceSection />);

    expect(screen.getByText(/Engineering Experience & Education/i)).toBeDefined();
    const pensItems = screen.getAllByText(/Politeknik Elektronika Negeri Surabaya/i);
    expect(pensItems.length).toBeGreaterThan(0);
    expect(screen.getByText(/Dinas Perpustakaan Provinsi Jawa Timur/i)).toBeDefined();
    expect(screen.getByText(/Rumah Sakit Islam Ahmad Yani/i)).toBeDefined();
  });

  it('renders footer with valid contact channels and links', () => {
    render(<Footer />);

    expect(screen.getByText(/Let's Build High-Performance Systems/i)).toBeDefined();

    const emailLink = screen.getByRole('link', { name: /Send Email/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:rahadyandanang27@gmail.com');

    const whatsappLink = screen.getByRole('link', { name: /WhatsApp Chat/i });
    expect(whatsappLink).toHaveAttribute('href', expect.stringContaining('wa.me'));

    const githubLink = screen.getByRole('link', { name: /GitHub Profile/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Rahdansuwa24');
  });
});
