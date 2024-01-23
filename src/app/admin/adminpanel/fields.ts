export const fields = {
    roadmap: [
        { name: 'id', label: 'id', type: 'text', errorMessage: 'is is required' },
        { name: 'title', label: 'Title', type: 'text', errorMessage: 'Title is required' },
        { name: 'description', label: 'Description', type: 'text', errorMessage: 'Description is required' },
        { name : 'domain', label : 'Domain', type : 'text', errorMessage : 'Domain is required'}
      ],
    milestone: [
        { name: 'id', label: 'ID', type: 'text', errorMessage: 'ID is required' },
        { name: 'roadmapId', label: 'Roadmap ID', type: 'text', errorMessage: 'Roadmap ID is required' },
        { name: 'title', label: 'Quiz ID', type: 'text', errorMessage: 'Quiz ID is required' },
        { name: 'orderNumber', label: 'Order Number', type: 'number', errorMessage: 'Order Number is required' },
        { name: 'description', label: 'Description', type: 'text', errorMessage: 'Description is required' }
      ],
    question: [
        { name: 'testQuizId', label: 'Test Quiz', type: 'number', errorMessage: 'Test Quiz is required' },
        { name: 'content', label: 'Content', type: 'text', errorMessage: 'Content is required' },
        { name: 'option0', label: 'option0', type: 'text', errorMessage: 'Options are required' },
        { name: 'option1', label: 'option1', type: 'text', errorMessage: 'Options are required' },
        { name: 'option2', label: 'option2', type: 'text', errorMessage: 'Options are required' },
        { name: 'option3', label: 'option3', type: 'text', errorMessage: 'Options are required' },
        { name: 'correctOption', label: 'Correct Option', type: 'number', errorMessage: 'Correct Option is required' }
    ]
}