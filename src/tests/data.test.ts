import { describe, it, expect } from 'vitest';
import { projects } from '../data/projects';
import { architectureTiers } from '../data/architecture';
import { skillCategories } from '../data/skills';
import { experiences } from '../data/experience';

describe('Data Integrity & Antislop Compliance', () => {
  it('contains all 5 key projects with required fields and screenshot placeholders', () => {
    expect(projects.length).toBe(5);
    const ids = projects.map(p => p.id);
    expect(ids).toContain('mapta');
    expect(ids).toContain('lulusin');
    expect(ids).toContain('trash-management');
    expect(ids).toContain('vismed-pacs');
    expect(ids).toContain('eduportal');

    for (const project of projects) {
      expect(project.title).toBeTruthy();
      expect(project.role).toBeTruthy();
      expect(project.problem).toBeTruthy();
      expect(project.solution).toBeTruthy();
      expect(project.architectureDetails).toBeTruthy();
      expect(project.tradeoffs).toBeTruthy();
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.links.length).toBeGreaterThan(0);
      expect(project.screenshotSlots.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('contains 4 architecture tiers in proper sequence', () => {
    expect(architectureTiers.length).toBe(4);
    expect(architectureTiers[0].id).toBe('edge');
    expect(architectureTiers[1].id).toBe('gateway');
    expect(architectureTiers[2].id).toBe('services');
    expect(architectureTiers[3].id).toBe('persistence');
  });

  it('strictly contains zero em dashes across all data structures', () => {
    const rawData = JSON.stringify({ projects, architectureTiers, skillCategories, experiences });
    expect(rawData.includes('\u2014'), 'Em dash found in data files!').toBe(false);
  });
});
