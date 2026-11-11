import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsSection from '../components/sections/ProjectsSection';

describe('ProjectsSection and CaseStudyModal', () => {
  it('renders all 4 featured engineering projects', () => {
    render(<ProjectsSection />);

    expect(screen.getByText(/Featured Engineering Systems/i)).toBeDefined();
    expect(screen.getByText(/MAPTA: Internship Administration Platform/i)).toBeDefined();
    expect(screen.getByText(/LuLuSin: UTBK-SNBT Exam Simulation Platform/i)).toBeDefined();
    expect(screen.getByText(/Trash Management: Role-Based Waste Logistics/i)).toBeDefined();
    expect(screen.getByText(/VISMED-PACS: Medical Image AI Inference System/i)).toBeDefined();
  });

  it('renders honest status badges without broken live links', () => {
    render(<ProjectsSection />);

    const inProgressBadges = screen.getAllByText(/Deployment in Progress/i);
    expect(inProgressBadges.length).toBeGreaterThan(0);

    const demoReadyBadges = screen.getAllByText(/Research Case Study/i);
    expect(demoReadyBadges.length).toBeGreaterThan(0);
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
