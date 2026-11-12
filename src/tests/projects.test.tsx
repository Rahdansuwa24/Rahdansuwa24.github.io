import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsSection from '../components/sections/ProjectsSection';

describe('ProjectsSection and CaseStudyModal', () => {
  it('renders all 5 featured engineering projects including EduPortal', () => {
    render(<ProjectsSection />);

    expect(screen.getByText(/Featured Engineering Systems/i)).toBeDefined();
    expect(screen.getByText(/EduPortal Pro/i)).toBeDefined();
    expect(screen.getByText(/MAPTA: Internship Administration Platform/i)).toBeDefined();
    expect(screen.getByText(/LuLuSin: UTBK-SNBT Exam Simulation Platform/i)).toBeDefined();
    expect(screen.getByText(/Trash Management: Role-Based Waste Logistics/i)).toBeDefined();
    expect(screen.getByText(/VISMED-PACS: Medical Image AI Inference System/i)).toBeDefined();
  });

  it('renders honest status badges and DuckDNS live deployment links', () => {
    render(<ProjectsSection />);

    const liveBadges = screen.getAllByText(/Live Deployment/i);
    expect(liveBadges.length).toBeGreaterThan(0);

    const liveLinks = screen.getAllByText(/Launch Live Site \(DuckDNS\)/i);
    expect(liveLinks.length).toBe(3);

    const privateBadges = screen.getAllByText(/Private Deployment/i);
    expect(privateBadges.length).toBeGreaterThan(0);

    const restrictedBadges = screen.getAllByText(/Restricted Access/i);
    expect(restrictedBadges.length).toBeGreaterThan(0);
  });

  it('opens CaseStudyModal when clicking Technical Case Study button and closes on Escape', () => {
    render(<ProjectsSection />);

    const caseStudyButtons = screen.getAllByRole('button', { name: /Technical Case Study/i });
    fireEvent.click(caseStudyButtons[0]);

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeDefined();
    expect(within(dialog).getByText(/Engineering Trade-offs & Decisions/i)).toBeDefined();
    expect(within(dialog).getByText(/Technical Problem & Context/i)).toBeDefined();

    // Close on Escape key
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});
