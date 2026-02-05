export interface AIProvider {
  generateLook(prompt: string): Promise<string>;
}
