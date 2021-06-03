#!/bin/bash

echo "Press 'Y' to start deployment"
read confirmation

if [ $confirmation != 'Y' ]; then
	echo "Exiting..."
	exit;
fi

echo "Deleting hidden settings..."
vscode=".vscode"
if [ -d $vscode ]; then 
	rm -R $vscode; 
	git add -A
	git commit -m "workspace settings removed"
fi

echo "Release Version: "
read version

echo "Release comments: "
read comments
echo ""

echo "Creating git tag..."
git tag $version -m "$comments"


echo "Press Y to push new release"
read pushNow
if [ $pushNow == 'Y' ]; then
	git push origin $version
	exit;
fi
