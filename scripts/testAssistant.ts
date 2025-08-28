// Test script for the assistant API
async function testAssistantAPI() {
  const baseUrl = 'http://localhost:3000/api/assistant';
  
  console.log('🧪 Testing Assistant API...\n');

  // Test 1: Text-only request
  console.log('1. Testing text-only request...');
  try {
    const textResponse = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description: 'My kitchen faucet is leaking from the handle'
      })
    });
    
    const textResult = await textResponse.json();
    console.log('✅ Text-only response:', textResponse.status);
    console.log('  Overview:', textResult.overview?.substring(0, 100) + '...');
    console.log('  Steps:', textResult.steps?.length, 'steps');
  } catch (error) {
    console.log('❌ Text-only error:', error);
  }

  // Test 2: Text + image request
  console.log('\n2. Testing text + image request...');
  try {
    const imageResponse = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description: 'My kitchen faucet is leaking from the handle',
        imageBase64: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==', // 1x1 pixel
        category: 'Plumbing'
      })
    });
    
    const imageResult = await imageResponse.json();
    console.log('✅ Image + text response:', imageResponse.status);
    console.log('  Overview:', imageResult.overview?.substring(0, 100) + '...');
    console.log('  Steps:', imageResult.steps?.length, 'steps');
  } catch (error) {
    console.log('❌ Image + text error:', error);
  }

  // Test 3: Invalid JSON
  console.log('\n3. Testing invalid JSON...');
  try {
    const invalidResponse = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{"description":}'
    });
    
    const invalidResult = await invalidResponse.json();
    console.log('✅ Invalid JSON response:', invalidResponse.status, invalidResult);
  } catch (error) {
    console.log('❌ Invalid JSON error:', error);
  }

  // Test 4: Missing description
  console.log('\n4. Testing missing description...');
  try {
    const missingResponse = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageBase64: 'test' })
    });
    
    const missingResult = await missingResponse.json();
    console.log('✅ Missing description response:', missingResponse.status, missingResult);
  } catch (error) {
    console.log('❌ Missing description error:', error);
  }

  console.log('\n🎉 Test completed!');
}

// Run the test
testAssistantAPI().catch(console.error);
