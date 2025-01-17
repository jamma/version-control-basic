import boto3
import json
from botocore.exceptions import NoCredentialsError, ClientError

def scan_dynamodb_table(table_name):
    """
    Retrieve all items from a DynamoDB table.
    """
    # Create a DynamoDB resource
    dynamodb = boto3.resource('dynamodb', region_name='us-east-1')  # Replace with your region
    
    # Get the table
    table = dynamodb.Table(table_name)
    
    try:
        # Scan the table to retrieve all items
        response = table.scan()
        items = response.get('Items', [])
        
        # Handle pagination if there are more items
        while 'LastEvaluatedKey' in response:
            response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
            items.extend(response.get('Items', []))
        
        print(f"Retrieved {len(items)} items from the table.")
        return items
    
    except ClientError as e:
        print(f"Error retrieving items: {e.response['Error']['Message']}")
        return None
    except NoCredentialsError:
        print("Credentials not available")
        return None

if __name__ == "__main__":
    # Replace with your DynamoDB table name
    table_name = "github-basic"
    
    # Retrieve items from the table
    items = scan_dynamodb_table(table_name)
    print(json.dumps(items,indent=2))