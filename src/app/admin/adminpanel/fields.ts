export const fields = {
    roadmap: [
        { name: 'id', label: 'id', type: 'text', errorMessage: 'id is required' , required: true},
        { name: 'title', label: 'Title', type: 'text', errorMessage: 'Title is required', required: true },
        { name: 'description', label: 'Description', type: 'text', errorMessage: 'Description is required', required: true },
        { name: 'domain', label : 'Domain', type : 'text'},
      ],
    milestone: [
        { name: 'id', label: 'ID', type: 'text', errorMessage: 'ID is required',required: true },
        { name: 'xxroadmapId', label: 'xxRoadmap ID', type: 'text', errorMessage: 'Roadmap ID is required', required: true },
        { name: 'title', label: 'Quiz ID', type: 'text', errorMessage: 'Quiz ID is required', required: true },
        { name: 'orderNumber', label: 'Order Number', type: 'number', errorMessage: 'Order Number is required', required: true },
        { name: 'description', label: 'Description', type: 'text', errorMessage: 'Description is required', required: true },
        {
          name: 'roadmap',
          label: 'Roadmap ID',
          type: 'dropdown',
          options: [],
          errorMessage: 'Roadmap ID is required',
          required: true
        },
      ],
    question: [
        { name: 'xxtestQuizId', label: 'Test Quiz', type: 'number', errorMessage: 'Test Quiz is required', required: true },
        { name: 'content', label: 'Content', type: 'text', errorMessage: 'Content is required', required: true },
        { name: 'option0', label: 'option0', type: 'text', errorMessage: 'Options are required', required: true },
        { name: 'option1', label: 'option1', type: 'text', errorMessage: 'Options are required', required: true },
        { name: 'option2', label: 'option2', type: 'text', errorMessage: 'Options are required', required: true },
        { name: 'option3', label: 'option3', type: 'text', errorMessage: 'Options are required', required: true },
        { name: 'correctOption', label: 'Correct Option', type: 'number', errorMessage: 'Correct Option is required', required: true },
        {
          name: 'testQuizId',
          label: 'testQuizId',
          type: 'dropdown',
          options: [],
          errorMessage: 'testQuizId is required',
          required: true
        },

    ]
}