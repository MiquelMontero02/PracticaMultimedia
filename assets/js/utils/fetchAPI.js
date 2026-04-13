async function fetchAPI(url, options = {}) {
    try {
        const response = await fetch(url, {
            
            ...options,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        return JSON.parse(text);
    } catch (error) {
        console.error('Error fetching API:', error);
        throw error;
    }
}