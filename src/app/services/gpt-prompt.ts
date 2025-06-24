import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskData } from '../interface/taskdata';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GptPrompt {
  private apiUrl = 'https://api.openai.com/v1/chat/completions'; // Or your own API wrapper
  public apiKey = '';

  constructor(private http: HttpClient) {}

  condenseNote(note: string): Observable<TaskData> {
    const prompt = this.buildPrompt(note);

    const body = {
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'You are an assistant that helps clarify notes and extract useful metadata.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
    };

    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
    };

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      map((response) => {
        const content = response.choices[0].message.content;
        return JSON.parse(content) as TaskData;
      })
    );
  }

  private buildPrompt(note: string): string {
    return `
      Please help with the following note:

      "${note}"

      Return the following:
      1. A concise and clear version of the note
      2. A short, descriptive title
      3. Any recognizable date or time mentioned
      4. Any links or URLs found

      Respond in this JSON format:
      {
        "title": "...",
        "description": "...",
        "date": "...",
        "time": "...",
        "links": ["..."]
      }
          `.trim();
  }
}
