import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ArchitectureSection from '../components/sections/ArchitectureSection';

describe('ArchitectureSection and LayerModal', () => {
  it('renders all 4 cloud topology tiers and section header', () => {
    render(<ArchitectureSection />);

    expect(screen.getByText(/Interactive Cloud Topology/i)).toBeDefined();
    expect(screen.getByText(/Edge & Client Delivery Layer/i)).toBeDefined();
    expect(screen.getByText(/Gateway & Reverse Proxy Layer/i)).toBeDefined();
    expect(screen.getByText(/Service & Application Layer/i)).toBeDefined();
    expect(screen.getByText(/Persistence & Media Layer/i)).toBeDefined();
  });

  it('opens LayerModal when a tier card is clicked and closes on Escape key', () => {
    render(<ArchitectureSection />);

    // Click gateway layer
    const gatewayCard = screen.getByText(/Gateway & Reverse Proxy Layer/i);
    fireEvent.click(gatewayCard);

    // Modal dialog is opened
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeDefined();
    expect(within(dialog).getByText(/Caddy Reverse Proxy/i)).toBeDefined();
    expect(within(dialog).getByText(/Azure Standard B2als v2/i)).toBeDefined();

    // Close using Escape key
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('closes LayerModal when close button is clicked', () => {
    render(<ArchitectureSection />);

    const edgeCard = screen.getByText(/Edge & Client Delivery Layer/i);
    fireEvent.click(edgeCard);

    expect(screen.getByRole('dialog')).toBeDefined();

    const closeButton = screen.getByLabelText(/Close Layer Details/i);
    fireEvent.click(closeButton);

    expect(screen.queryByRole('dialog')).toBeNull();
  });
});
